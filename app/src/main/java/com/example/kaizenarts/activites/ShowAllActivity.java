package com.example.kaizenarts.activites;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
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

    RecyclerView recyclerView;
    ShowAllAdapter showAllAdapter;
    List<ShowAllModel> showAllModelList;

    FirebaseFirestore firestore;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_show_all);
        firestore=FirebaseFirestore.getInstance();

        recyclerView=findViewById(R.id.show_all_rec);
        recyclerView.setLayoutManager(new GridLayoutManager(this,2));

        showAllModelList=new ArrayList<>();
        showAllAdapter = new ShowAllAdapter(this,showAllModelList);
        recyclerView.setAdapter(showAllAdapter);

        firestore.collection("ShowAll")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {

                        if(task.isSuccessful()){
                            for (DocumentSnapshot doc :task.getResult().getDocuments()){
                                ShowAllModel showAllModel=doc.toObject(ShowAllModel.class);
                                showAllModelList.add(showAllModel);
                                showAllAdapter.notifyDataSetChanged();

                            }
                        }
                    }
                });


    }
}