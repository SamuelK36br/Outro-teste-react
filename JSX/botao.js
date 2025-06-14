function Botao(props) {
   return (
      <div className='box'>
         <h1 className='cab'>Esse botão deve fazer alguma coisa?</h1>
         <button className='botao'>
            {props.nome}
         </button>
      </div>
   )
}