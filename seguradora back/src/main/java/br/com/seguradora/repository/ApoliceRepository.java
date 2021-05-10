package br.com.seguradora.repository;

import br.com.seguradora.domain.Apolice;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApoliceRepository extends JpaRepository<Apolice, Long> {

       List<Apolice> findByNumeroApolice(Long apolice);
}
