## Datapicker

_Utilizado como exemplo o Datapicker em funcionamento do model Task_

No formulário de cadastro `(Ex: _01_part.js)`, importe o componente Datapicker:

- `import Datapicker from '../../../components/Datapicker'`

Insira o componente no local desejado como o exemplo abaixo:

```
<Grid  item  xs={6}>
	<Datapicker
		label="Prazo"
		dispatchAction={updateDeadlineDatapicker}
	/>
</Grid>
```

A props `dispatchAction` é declarada no componente para que o Datapicker tenha acesso a action criada de forma modular, as `actions` tem o papel de salvar os valores no Redux (State global da aplicação), com isso, conseguiremos pegar o valor da data fora do component datapicker, ou seja, conseguiremos ter acesso a data na pagina `_01_part.js`.

### Criando uma Action

No caminho `src/store/modules/nome_modulo/actions` deverá ser criado uma função que recebe como parâmetro o valor que você deseja armazenar no `Redux`.
Essa função deverá retornar obrigatoriamente um `type`, que é um nome no formato de String que será utilizado para identificar essa action através do `reducer.js`

Exemplo de Action:

```
export  function  updateDeadlineDatapicker(deadline) {
	return {
		type: '@task/UPDATE_DEADLINE_DATAPICKER',
		payload: { deadline },
	};
}
```

### Declarando um Reducer

No arquivo `reducer` localizado em `src/store/modules/nome_modulo/reducer`, deverá ser adicionado dois elementos:

1. No objeto `INITIAL_STATE` declarado no inicio do arquivo, deverá ser adicionado o nome do atributo na qual você deseja salvar o valor no State.

   Ex:

   ```
   const  INITIAL_STATE  = {
   	[...]
   	updateDate: {
   		deadline: '',  // Declarar como estado inicial um valor vazio.
   	},
   }
   ```

2. Adicionar um novo case na function já declarada no arquivo. Esse case deverá ter o nome exato da da type da Action na qual você declarou anteriormente. Dentro do case, você deverá atribuir o valor recebido da Action no atributo que você acabou de declarar no INITIAL_STATE.

Ex:

```
case  '@task/UPDATE_DEADLINE_DATAPICKER': {
	draft.updateDate.deadline  =  action.payload.deadline;
	break;
}
```

- `'@task/UPDATE_DEADLINE_DATAPICKER'` é o type da Action criada.

- `draft.updateDate.deadline` é o atributo que você acabou de declarar no objeto `INITIAL_STATE`
- `action.payload.deadlitne` é o valor que você disparou pelo datapicker.

De uma forma simples, a estrutura é a seguinte (nomes declarados visando facilitar o entendimento):

```
estadoGlobal: {
   [..]
   valorDoDatapicker: null
   [..]
}
```

Ao definir uma data no datapicker, é disparado uma action:
`dispatch(salvaNoEstado('2020-12-01'))`

```
estadoGlobal: {
   [..]
   valorDoDatapicker: '2020-12-01'
   [..]
}
```

### Pegando o valor do State e setando no formulário.

No formulário de cadastro `(Ex: _01_part.js)`:

1. Importe a action criada:

`import { updateDeadlineDatapicker } from '../../../store/modules/task/actions';`

2. No componente Datapicker, envie a action importada através da props dispatchAction();

```
<Datapicker
	label="Prazo"
	->> dispatchAction={updateDeadlineDatapicker} <<-
/>
```

3. Importe também o método `useSelector` do Redux, responsável em dar o `get` naquele determinado valor do State;

`import { useDispatch, useSelector } from 'react-redux'; `

4.  Declare uma variável para armazenar o valor:
    `const datapickerState = useSelector((state) => state.tasks.updateDate.deadline)

5.  Na função `handleSubmit`, responsável por validar os inputs e disparar o cadastro do formulário, atribua o valor pego do state (`datapickerState`) ao objeto `values` que é o objeto com todos os atributos que será enviado para o cadastro na requisição. **Atribuir o valor, sempre dentro da condição `if(!err)`**

Ex:

```
const  handleSubmit  = (e) => {
	const  err  =  validate();
	if (!err) {
		->> values.deadline =  datapickerState; <<-
		dispatch(createTaskRequest(values));
		}
};
```
