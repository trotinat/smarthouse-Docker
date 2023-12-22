package com.example.appareil.cotroller;

import com.example.appareil.entity.Categorie;
import com.example.appareil.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/controller/categorie")
@CrossOrigin
public class CategorieController {


    @Autowired
    private CategorieService categorieService;

    @GetMapping("/")
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

    @PostMapping("/")
    public Categorie save(@RequestBody Categorie categorie) {
        return categorieService.save(categorie);
    }


    @GetMapping("/id/{id}")
    public Optional<Categorie> findById(@PathVariable Long id) {
        return categorieService.findById(id);
    }

    @DeleteMapping("/id/{id}")
    public void deleteById(@PathVariable Long id) {
        categorieService.deleteById(id);
    }


    @PutMapping("/id/{id}")
    public void update(@PathVariable Long id,@RequestBody Categorie catInfo) {
        categorieService.update(id, catInfo);
    }


}
