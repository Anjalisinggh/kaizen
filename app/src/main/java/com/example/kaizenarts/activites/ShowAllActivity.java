package com.example.kaizenarts.activites;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.kaizenarts.R;
import com.example.kaizenarts.adapters.ShowAllAdapter;
import com.example.kaizenarts.models.ShowAllModel;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.List;

public class ShowAllActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private ShowAllAdapter showAllAdapter;
    private List<ShowAllModel> showAllModelList;

    private FirebaseFirestore firestore;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_all);

        // Initialize Firestore and UI components
        firestore = FirebaseFirestore.getInstance();
        recyclerView = findViewById(R.id.show_all_rec);
        recyclerView.setLayoutManager(new GridLayoutManager(this, 2));

        // Initialize list and adapter
        showAllModelList = new ArrayList<>();
        showAllAdapter = new ShowAllAdapter(this, showAllModelList);
        recyclerView.setAdapter(showAllAdapter);

        // Get type from intent
        String type = getIntent().getStringExtra("type");

        // Fetch data based on type
        if (type == null || type.isEmpty()) {
            fetchAllProducts();
        } else {
            fetchProductsByType(type);
        }
    }

    /**
     * Fetches all products from the Firestore collection "ShowAll".
     */
    private void fetchAllProducts() {
        firestore.collection("ShowAll")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful() && task.getResult() != null) {
                            showAllModelList.clear(); // Clear the list to avoid duplicates
                            for (DocumentSnapshot doc : task.getResult().getDocuments()) {
                                ShowAllModel showAllModel = doc.toObject(ShowAllModel.class);
                                if (showAllModel != null) {
                                    showAllModelList.add(showAllModel);
                                }
                            }
                            showAllAdapter.notifyDataSetChanged();
                        }
                    }
                });
    }

    /**
     * Fetches products from the Firestore collection "ShowAll" based on the specified type.
     *
     * @param type The type of products to fetch.
     */
    private void fetchProductsByType(String type) {
        firestore.collection("ShowAll")
                .whereEqualTo("type", type)
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful() && task.getResult() != null) {
                            showAllModelList.clear(); // Clear the list to avoid duplicates
                            for (DocumentSnapshot doc : task.getResult().getDocuments()) {
                                ShowAllModel showAllModel = doc.toObject(ShowAllModel.class);
                                if (showAllModel != null) {
                                    showAllModelList.add(showAllModel);
                                }
                            }
                            showAllAdapter.notifyDataSetChanged();
                        }
                    }
                });
    }
}
