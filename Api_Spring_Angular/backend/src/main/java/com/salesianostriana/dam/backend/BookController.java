package com.salesianostriana.dam.backend;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = {"http://localhost:4200/"})
public class BookController {

    public List <Book> findAll(){
        System.out.println("findAll");
        return List.of(
            new Book(1L,"Libro 1"),
            new Book(2L,"Libro 2"),
            new Book(2L,"Libro 3")

        );
    }
    
    
   
    @GetMapping("/{id}")
    public Book findById(@PathVariable Long id){
        System.out.println("finById" + id);
        return new Book(id, "libro de ejemplo");
    }
     
}
