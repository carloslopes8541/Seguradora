package br.com.seguradora.service;

import br.com.seguradora.domain.Apolice;
import br.com.seguradora.repository.ApoliceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApoliceService {

    @Autowired
    private ApoliceRepository apoliceRepository;

    public Apolice salvar(Apolice apolice){
        return apoliceRepository.save(apolice);
    }

    public Apolice alterar(Apolice apolice){
        return apoliceRepository.save(apolice);
    }

    public List<Apolice> listar(){
        return apoliceRepository.findAll();
    }

    public List<Apolice> buscar(Long numeroApolice){
        return apoliceRepository.findByNumeroApolice(numeroApolice);
    }

    public Optional<Apolice> buscarPorNumero(Long numeroApolice){
        return apoliceRepository.findById(numeroApolice);
    }

    public void deletar(Long numeroApolice){
        apoliceRepository.deleteById(numeroApolice);
    }
}
