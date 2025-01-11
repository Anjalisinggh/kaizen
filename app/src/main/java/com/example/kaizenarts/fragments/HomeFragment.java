package com.example.kaizenarts.fragments;

import android.media.MediaPlayer;
import android.os.Bundle;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.firebase.firestore.QuerySnapshot;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.denzcoskun.imageslider.ImageSlider;
import com.denzcoskun.imageslider.constants.ScaleTypes;
import com.denzcoskun.imageslider.models.SlideModel;
import com.example.kaizenarts.R;
import com.example.kaizenarts.adapters.CategoryAdapter;
import com.example.kaizenarts.models.CategoryModel;
import com.google.android.gms.tasks.Task;

import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.List;

public class HomeFragment extends Fragment {

    RecyclerView catRecycleview;
    CategoryAdapter categoryAdapter;

    List<CategoryModel> categoryModelList;

    FirebaseFirestore db;
    public HomeFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        // Initialize RecyclerView
        catRecycleview = root.findViewById(R.id.rec_category);
        catRecycleview.setLayoutManager(new LinearLayoutManager(getActivity(), RecyclerView.HORIZONTAL, false));

        // Initialize Category List and Adapter
        categoryModelList = new ArrayList<>();


        categoryAdapter = new CategoryAdapter(getContext(), categoryModelList);
        catRecycleview.setAdapter(categoryAdapter);

        db=FirebaseFirestore.getInstance();

        // Setup ImageSlider
        ImageSlider imageSlider = root.findViewById(R.id.image_slider);
        if (imageSlider != null) {
            List<SlideModel> slideModels = new ArrayList<>();
            slideModels.add(new SlideModel(R.drawable.banner11, "Upto 70% Discount on Earrings", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner22, "Huge Discount on Bangles", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner33, "Discount on these lovely Chokers", ScaleTypes.FIT));

            imageSlider.setImageList(slideModels, ScaleTypes.FIT);
        }
        db.collection("Category")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                CategoryModel categoryModel = document.toObject(CategoryModel.class);
                                categoryModelList.add(categoryModel);
                            }
                            categoryAdapter.notifyDataSetChanged();
                        } else {
                            // Handle the error
                            Log.e("FirestoreError", "Error getting documents: ", task.getException());
                        }
                    }
                });





        return root;
    }
}
