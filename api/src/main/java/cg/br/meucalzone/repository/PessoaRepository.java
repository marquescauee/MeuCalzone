package cg.br.meucalzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cg.br.meucalzone.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

}
