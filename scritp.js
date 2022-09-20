        var saldo = 156.98;
        var name = prompt('Digite seu nome: ');
        alert('Ola ' +name+ ' é um prazer ter você por aqui!. ');

        function inicio(){

        var teste = parseInt(prompt('Ola ' +name+ ' Selecione uma opção 1.)Saldo 2.)Extrato 3.)Depósito 4.)Saque 5-)Transferência 6-)Sair'));

        switch (teste) {
                case 1:
                    ver_saldo();
                    break;
                case 2:
                    ver_extrato();
                    break;
                case 3:
                    fazer_deposito();
                    break;
                case 4:
                    fazer_saque();
                    break;
                case 5:
                    fazer_transferencia();
                    break;
                case 6: 
                    sair();
                    break;
                case 7:
                ver_senha();
                    break;
                default:
                    erro();
                    break;
            }
        }

        function ver_saldo() {
            alert('Você tem ' +saldo+ ' na conta ');
            inicio();
        }

        function ver_extrato() {
            ver_senha();
            alert("Leite ninho -R$ 20,25 Arooz -R$ -15,10 Haineken -R$ -8,25 Vodka -R$ -25,55");
            inicio();
        }

        function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));

			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

        function fazer_saque() {
            var saque = parseFloat(prompt('Qual o valor de saque: '));

            if (isNaN(saque) || saque === '') {
                alert('Por favor, informe um valor.');
                fazer_saque();
            } else {
                saldo = saldo - saque;
                //saldo -= saque;

                ver_saldo();
            }
        }

        function fazer_transferencia() {
			ver_senha();
			var num_conta = parseInt(prompt("Por favor, digite o numero da conta que receberá a transferência: "));
			var transferencia = parseFloat(prompt("Por favor, digite o valor da transferencia: "));

			if (isNaN(num_conta) || num_conta === '') {
				alert('Por favor, informe um número para a conta.');
				fazer_transferencia();
			}
			if (isNaN(transferencia) || transferencia === '') {
				alert('Por favor, informe um número para a transferência.');
				fazer_transferencia();
			} else if (transferencia > saldo || transferencia <= 0) {
				alert('Operação não autorizada.');
				fazer_transferencia();
			} else {
				saldo -= transferencia;
				ver_saldo();
			}
		}

        function ver_senha() {
			var senha = parseInt(prompt("Digite sua senha: "));

			if (senha != 3589) {
				alert("Senha inválida...");
				ver_senha();
			}
		}

        function erro(){
            alert('Para de burlar o bagulho corno!');
            inicio();
        }

        function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}

        inicio();