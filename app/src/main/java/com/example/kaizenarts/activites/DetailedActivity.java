package com.example.kaizenarts.activites;

import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.example.kaizenarts.R;
import com.example.kaizenarts.models.NewProductsModel;
import com.example.kaizenarts.models.PopularProductsmodel;
import com.google.firebase.firestore.FirebaseFirestore;

public class DetailedActivity extends AppCompatActivity {

    ImageView detailedImg;
    TextView rating, name, description, price;
    Button addToCart, buyNow;
    ImageView addItems, removeItems;

    NewProductsModel newProductsModel = null ;
//popular product
    PopularProductsmodel popularProductsmodel=null;
    private FirebaseFirestore firestore;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detailed);

        firestore=FirebaseFirestore.getInstance();
        final Object obj = getIntent().getSerializableExtra("detailed");


        // Initialize views
        detailedImg = findViewById(R.id.detailed_img);
        rating = findViewById(R.id.rating);
        name = findViewById(R.id.detailed_name);
        description = findViewById(R.id.detailed_desc);
        price = findViewById(R.id.detailed_price);
        addToCart = findViewById(R.id.add_to_cart);
        buyNow = findViewById(R.id.buy_now);
        addItems = findViewById(R.id.add_item);
        removeItems = findViewById(R.id.remove_item);

        // Retrieve product data


        if (obj  instanceof NewProductsModel) {
            newProductsModel = (NewProductsModel) obj;
        } else if (obj instanceof PopularProductsmodel ) {
            popularProductsmodel=(PopularProductsmodel) obj;
        }
        detailedImg= findViewById(R.id.detailed_img);
        name=findViewById(R.id.detailed_name);
        rating=findViewById(R.id.rating);
        description=findViewById(R.id.detailed_desc);
        price=findViewById(R.id.detailed_price);

        addToCart=findViewById(R.id.add_to_cart);
        buyNow=findViewById(R.id.buy_now);

        addItems=findViewById(R.id.add_item);
        removeItems=findViewById(R.id.remove_item);

        //new product
        if(newProductsModel != null){
            Glide.with(getApplicationContext()).load(newProductsModel.getImg_url()).into(detailedImg);
            name.setText(newProductsModel.getName());
            rating.setText(newProductsModel.getRating());
            description.setText(newProductsModel.getDescription());
            price.setText(String.valueOf(newProductsModel.getPrice()));
            name.setText(newProductsModel.getName());

        }
        //popular product
        if(popularProductsmodel != null){
            Glide.with(getApplicationContext()).load(popularProductsmodel.getImg_url()).into(detailedImg);
            name.setText(popularProductsmodel.getName());
            rating.setText(popularProductsmodel.getRating());
            description.setText(popularProductsmodel.getDescription());
            price.setText(String.valueOf(popularProductsmodel.getPrice()));
            name.setText(popularProductsmodel.getName());

        }

    }
}
