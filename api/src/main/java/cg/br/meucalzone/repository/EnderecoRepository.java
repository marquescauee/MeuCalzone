package cg.br.meucalzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cg.br.meucalzone.models.Endereco;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer>{

}
