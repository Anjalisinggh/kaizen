package com.example.kaizenarts.fragments;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.denzcoskun.imageslider.ImageSlider;
import com.denzcoskun.imageslider.constants.ScaleTypes;
import com.denzcoskun.imageslider.models.SlideModel;
import com.example.kaizenarts.R;

import java.util.ArrayList;

public class HomeFragment extends Fragment {

    public HomeFragment() {
        // Required empty public constructor
    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        // Image slider setup
        ImageSlider imageSlider = root.findViewById(R.id.image_slider);
        if (imageSlider != null) {
            ArrayList<SlideModel> slideModels = new ArrayList<>();
            // Correctly pass description and ScaleTypes
            slideModels.add(new SlideModel(R.drawable.banner11, " Upto 70% Discount on Earrings", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner22, " Huge Discount on bangles ", ScaleTypes.FIT));
            slideModels.add(new SlideModel(R.drawable.banner33, "Discount on this lovely chokers", ScaleTypes.FIT));

            imageSlider.setImageList(slideModels);
        }
        return root;
    }

}
