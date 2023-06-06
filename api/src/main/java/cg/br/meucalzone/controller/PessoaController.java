package cg.br.meucalzone.controller;

import java.util.List;
import java.util.Optional;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cg.br.meucalzone.models.Endereco;
import cg.br.meucalzone.models.Pessoa;
import cg.br.meucalzone.repository.EnderecoRepository;
import cg.br.meucalzone.repository.PessoaRepository;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

	private PessoaRepository pessoaRepository;
	private EnderecoRepository enderecoRepository;

	public PessoaController(PessoaRepository pessoaRepository, EnderecoRepository enderecoRepository) {
		this.pessoaRepository = pessoaRepository;
		this.enderecoRepository = enderecoRepository;
	}

	@GetMapping
	public ResponseEntity<List<Pessoa>> getPessoas() {
		List<Pessoa> pessoas = pessoaRepository.findAll();

		return ResponseEntity.status(HttpStatus.OK).body(pessoas);
	}

	@PostMapping
	public ResponseEntity<Object> savePessoa(@RequestBody @Valid Pessoa pessoa) {
		try {
			Endereco enderecoRequest = pessoa.getEndereco();

			Endereco endereco = new Endereco(enderecoRequest.getRua(), enderecoRequest.getNumero(), enderecoRequest.getBairro(), enderecoRequest.getCidade());

			enderecoRepository.save(endereco);
			pessoa.setEndereco(endereco);
			pessoaRepository.save(pessoa);
			return ResponseEntity.status(HttpStatus.CREATED).body(pessoa);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("\"Corpo da requisição inválido\"");
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getPessoa(@PathVariable(value = "id") int id) {
		Optional<Pessoa> pessoa = pessoaRepository.findById(id);

		if (pessoa.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(pessoa);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Pessoa não encontrada\"");
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updatePessoa(@PathVariable(value = "id") int id,
			@RequestBody @Valid Pessoa pessoaRequest) {

		Optional<Pessoa> pessoaBanco = pessoaRepository.findById(id);

		if (!pessoaBanco.isPresent())
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Pessoa não encontrada\"");

		Pessoa pessoa = pessoaBanco.get();

		Optional<Endereco> enderecoBanco = enderecoRepository.findById(pessoa.getEndereco().getIdEndereco());

		pessoa.setCpf(pessoaRequest.getCpf());
		pessoa.setEmail(pessoaRequest.getEmail());
		pessoa.setNome(pessoaRequest.getNome());
		pessoa.setSenha(pessoaRequest.getSenha());
		pessoa.setTipo(pessoaRequest.getTipo());

		if (enderecoBanco.isPresent()) {
			Endereco endereco = enderecoBanco.get();
			endereco.setRua(pessoaRequest.getEndereco().getRua());
			endereco.setBairro(pessoaRequest.getEndereco().getBairro());
			endereco.setCidade(pessoaRequest.getEndereco().getCidade());
			endereco.setNumero(pessoaRequest.getEndereco().getNumero());
			pessoa.setEndereco(endereco);
		}

		return ResponseEntity.status(HttpStatus.OK).body(pessoaRepository.save(pessoa));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deletePessoa(@PathVariable(value = "id") int id) {
		Optional<Pessoa> pessoaOptional = pessoaRepository.findById(id);

		if (!pessoaOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Pessoa não encontrada\"");
		}

		pessoaRepository.delete(pessoaOptional.get());

		return ResponseEntity.status(HttpStatus.OK).body("\"Pessoa removida com sucesso!\"");
	}
}
