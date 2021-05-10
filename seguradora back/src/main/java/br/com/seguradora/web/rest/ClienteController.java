package br.com.seguradora.web.rest;

import br.com.seguradora.domain.Cliente;
import br.com.seguradora.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteService service;

    @GetMapping("/cliente")
    public List<Cliente> lisarClientes(){
        return service.listar();
    }

    @GetMapping("/cliente/{id}")
    public ResponseEntity<Cliente> listarPorId(@PathVariable Long id){
        return new ResponseEntity( service.buscarPorNumero(id), HttpStatus.OK);
    }

    @PostMapping("/cliente")
    public Cliente cadastrar(@RequestBody Cliente cliente){
          return service.salvar(cliente);
        }

    @PutMapping("/cliente")
    public Cliente alterar(@RequestBody Cliente cliente){
        return service.alterar(cliente);
    }

    @DeleteMapping("cliente/{id}")
    public void deletar(@PathVariable Long id){
        service.deletar(id);
    }
    }



