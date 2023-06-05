package cg.br.meucalzone.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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
import cg.br.meucalzone.repository.EnderecoRepository;

@RestController
@RequestMapping("/api/enderecos")
public class EnderecoController {

	private EnderecoRepository enderecoRepository;

	public EnderecoController(EnderecoRepository enderecoRepository) {
		this.enderecoRepository = enderecoRepository;
	}

	@GetMapping
	public ResponseEntity<List<Endereco>> getEnderecos() {
		List<Endereco> enderecos = enderecoRepository.findAll();

		return ResponseEntity.status(HttpStatus.OK).body(enderecos);
	}

	@PostMapping
	public ResponseEntity<Object> saveEndereco(@RequestBody @Valid Endereco endereco) {
		try {
			enderecoRepository.save(endereco);
			return ResponseEntity.status(HttpStatus.CREATED).body(endereco);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Endereço inválido");
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getEndereco(@PathVariable(value = "id") int id) {
		Optional<Endereco> endereco = enderecoRepository.findById(id);

		if (endereco.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(endereco);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Endereço não encontrado");
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateEndereco(@PathVariable(value = "id") int id,
			@RequestBody @Valid Endereco enderecoRequest) {

		Optional<Endereco> enderecoBanco = enderecoRepository.findById(id);

		if (!enderecoBanco.isPresent())
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Endereco não Encontrado");

		Endereco endereco = enderecoBanco.get();

		endereco.setBairro(enderecoRequest.getBairro());
		endereco.setCidade(enderecoRequest.getCidade());
		endereco.setNumero(enderecoRequest.getNumero());
		endereco.setRua(enderecoRequest.getRua());

		return ResponseEntity.status(HttpStatus.OK).body(enderecoRepository.save(endereco));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteEndereco(@PathVariable(value = "id") int id) {
		Optional<Endereco> enderecoOptional = enderecoRepository.findById(id);

		if (!enderecoOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Endereço não encontrado");
		}

		enderecoRepository.delete(enderecoOptional.get());

		return ResponseEntity.status(HttpStatus.OK).body("Endereço removido com sucesso");
	}
}
