package br.com.seguradora.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clienteGerador")
    @SequenceGenerator(name = "clienteGerador", sequenceName = "cliente_seq", allocationSize = 1)
    private Long Id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String Cpf;

    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String uf;

}
