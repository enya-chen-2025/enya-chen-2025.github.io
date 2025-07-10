


const state ={
  ansList:[]
}

const actions ={}

const getters = {
  getLength(state){
    return state.ansList.length
  }
}

const mutations= {
  addList(state,answer){
    console.log("ans now is: ",answer)
    // state.ansList = state.ansList.filter(item => item.value !== answer.value)
    state.ansList.push(answer)
    console.log("ans list is: ",this.ansList)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}