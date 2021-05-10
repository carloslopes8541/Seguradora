package br.com.seguradora.service;

import br.com.seguradora.domain.Apolice;
import br.com.seguradora.domain.Cliente;
import br.com.seguradora.repository.ApoliceRepository;
import br.com.seguradora.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvar(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public Cliente alterar(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public List<Cliente> listar(){
        return clienteRepository.findAll();
    }

    public Optional<Cliente> buscarPorNumero(Long id){
        return clienteRepository.findById(id);
    }

    public void deletar(Long id){
        clienteRepository.deleteById(id);
    }
}
