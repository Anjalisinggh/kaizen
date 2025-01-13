package com.example.kaizenarts.fragments;

import android.app.ProgressDialog;
import android.media.MediaPlayer;
import android.os.Bundle;

import com.example.kaizenarts.adapters.NewProductsAdapter;
import com.example.kaizenarts.adapters.PopularProductsAdapter;
import com.example.kaizenarts.models.NewProductsModel;
import com.example.kaizenarts.models.PopularProductsmodel;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.firebase.firestore.QuerySnapshot;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.Toast;

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

    LinearLayout linearLayout;
    ProgressDialog progressDialog;
    RecyclerView catRecycleview,newProductRecyclerview,popularRecycleview;

    CategoryAdapter categoryAdapter;

    List<CategoryModel> categoryModelList;
//new product recyclerview
    NewProductsAdapter newProductsAdapter;
    List<NewProductsModel>newProductsModelList;
    // popular products
    PopularProductsAdapter popularProductsAdapter;
    List<PopularProductsmodel>popularProductsmodelList;

    FirebaseFirestore db;
    public HomeFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        progressDialog=new ProgressDialog(getActivity());
        // Initialize RecyclerView
        catRecycleview = root.findViewById(R.id.rec_category);
        newProductRecyclerview=root.findViewById(R.id.new_product_rec);
        catRecycleview.setLayoutManager(new LinearLayoutManager(getActivity(), RecyclerView.HORIZONTAL, false));
        popularRecycleview=root.findViewById(R.id.popular_rec);
        // Initialize Category List and Adapter
        categoryModelList = new ArrayList<>();



        categoryAdapter = new CategoryAdapter(getContext(), categoryModelList);
        catRecycleview.setAdapter(categoryAdapter);
        newProductRecyclerview = root.findViewById(R.id.new_product_rec);



        db=FirebaseFirestore.getInstance();

        linearLayout=root.findViewById(R.id.home_layout);
        linearLayout.setVisibility(View.GONE);
        // Setup ImageSlider
        ImageSlider imageSlider = root.findViewById(R.id.image_slider);
        if (imageSlider != null) {
            List<SlideModel> slideModels = new ArrayList<>();
            slideModels.add(new SlideModel(R.drawable.banner11, "Upto 70% Discount on Earrings", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner22, "Huge Discount on Bangles", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner33, "Discount on these lovely Chokers", ScaleTypes.FIT));

            imageSlider.setImageList(slideModels, ScaleTypes.FIT);

            progressDialog.setTitle("Welcome to Kaizen Arts!!");
            progressDialog.setMessage("Please Wait!!!..");
            progressDialog.setCanceledOnTouchOutside(false);
            progressDialog.show();

        }
        //category
        catRecycleview.setLayoutManager(new LinearLayoutManager(getActivity(),RecyclerView.HORIZONTAL,false));
        categoryModelList=new ArrayList<>();
        categoryAdapter=new CategoryAdapter(getContext(),categoryModelList);
        catRecycleview.setAdapter(categoryAdapter);
        db.collection("Category")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                CategoryModel categoryModel = document.toObject(CategoryModel.class);
                                categoryModelList.add(categoryModel);
                                categoryAdapter.notifyDataSetChanged();
                                linearLayout.setVisibility(View.VISIBLE);
                                progressDialog.dismiss();
                            }

                        } else
                        {
                            // Handle the error
                            Toast.makeText(getActivity(),""+task.getException(),Toast.LENGTH_SHORT).show();
                        }
                    }
                });
        //new products
        newProductRecyclerview.setLayoutManager(new LinearLayoutManager(getActivity(),RecyclerView.HORIZONTAL,false));
        newProductsModelList = new ArrayList<>();
        newProductsAdapter =new NewProductsAdapter(getContext(),newProductsModelList);
        newProductRecyclerview.setAdapter(newProductsAdapter);

        db.collection("NewProducts")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                NewProductsModel newProductsModel = document.toObject(NewProductsModel.class);
                                newProductsModelList.add(newProductsModel);
                                newProductsAdapter.notifyDataSetChanged();
                            }

                        } else {
                            // Handle the error
                            Toast.makeText(getActivity(),""+task.getException(),Toast.LENGTH_SHORT).show();
                        }
                    }
                });

        //popular product
        popularRecycleview.setLayoutManager(new GridLayoutManager(getActivity(),2));
        popularProductsmodelList = new ArrayList<>();
        popularProductsAdapter =new PopularProductsAdapter(getContext(),popularProductsmodelList);
        popularRecycleview.setAdapter(popularProductsAdapter);

        db.collection("AllProducts")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {

                                PopularProductsmodel popularProductsmodel = document.toObject(PopularProductsmodel.class);
                                popularProductsmodelList.add(popularProductsmodel);
                                popularProductsAdapter.notifyDataSetChanged();
                            }

                        } else {
                            // Handle the error
                            Toast.makeText(getActivity(),""+task.getException(),Toast.LENGTH_SHORT).show();
                        }
                    }
                });

        return root;
    }
}
