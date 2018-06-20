import axios from 'axios'
import moment from 'moment'

/**
 * Retorna el arreglo con los valores de indicadores
 * @param {*} data
 * @returns array
 */
function getIndicadores (data) {

  let indicadores = [
    data.uf, data.ivp, data.dolar, data.euro, data.ipc, data.utm, data.imacec,
    data.tpm, data.libra_cobre, data.tasa_desempleo, data.bitcoin
  ];

  for (let indicador of indicadores) {

    // Reemplazo de Porcentaje por %
    if (indicador.unidad_medida === 'Porcentaje'){
      indicador.unidad_medida = '%';
    }

  }

  return indicadores;

}

/**
 * Definición del componente
 */
export default {
  name: 'Indicadores',
  components: {},
  data () {
    return {
      fecha       : null,
      indicadores : null
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://mindicador.cl/api')
      .then(response => {
        this.fecha        = moment(response.data.fecha).format('DD-MM-YYYY')
        this.indicadores  = getIndicadores(response.data)
      })
      .catch( error => {
        console.log(error)
      })
      .finally( () => {} )
  }
}