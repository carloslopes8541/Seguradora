package br.com.seguradora.web.rest;

import br.com.seguradora.domain.Apolice;
import br.com.seguradora.domain.Cliente;
import br.com.seguradora.service.ApoliceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApoliceController {

    @Autowired
    private ApoliceService service;

    @GetMapping("/apolice")
    public List<Apolice> lisarApolice(){
        return service.listar();
    }

    @GetMapping("/apolice/{id}")
    public ResponseEntity<Apolice> listarPorNumero(@PathVariable Long id){
        return new ResponseEntity( service.buscarPorNumero(id), HttpStatus.OK);
    }

    @GetMapping("/apolice/buscar{id}")
    public ResponseEntity<Apolice> buscarApolice(@PathVariable Long mumeroApolice){
        return new ResponseEntity( service.buscarPorNumero(mumeroApolice), HttpStatus.OK);
    }

    @PostMapping("/apolice")
    public Apolice cadastrar(@RequestBody Apolice apolice){
        return service.salvar(apolice);
    }

    @PutMapping("/apolice")
    public Apolice alterar(@RequestBody Apolice apolice){
        return service.alterar(apolice);
    }

    @DeleteMapping("apolice/{id}")
    public void deletar(@PathVariable Long id){
        service.deletar(id);
    }
}
