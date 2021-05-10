package br.com.seguradora.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Apolice {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "apoliceGerador")
    @SequenceGenerator(name = "apoliceGerador", sequenceName = "apolise_seq", allocationSize = 1)
    private Long numeroApolice;

    @Column(name = "inicio_contrato", nullable = false)
    private String inicioContrato;

    @Column(name = "fim_contrato", nullable = false)
    private String fimContrato;

    @Column(name = "placa_veiculo", nullable = false)
    private String placaVeiculo;

    @Column(name = "valor_apolice", nullable = false)
    private Double valorApolice;


//    @PrePersist
//    private void setInicio(){
//        this.inicioContrato =  LocalDateTime.now();
//    }

}
