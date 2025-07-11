const state ={
  ansList:[],
  rankingList:[]
}

const actions ={}

const getters = {
  getLength(state){
    return state.ansList.length
  },

getScore(state){
  const score = state.ansList.filter((item)=> item.isAns == true)
  return score.length;
},

getWrongAns(state){
  const wrong = state.ansList.filter(item => item.isAns == false)

  wrong.forEach(item => {
    item.options.forEach((option)=>{
      if(item.isAns==false && item.value!==option.value){
        option.isSelected = false
      }
    })
  });

  return wrong
},

getLocalStorage(state){
for(let i=0;i<localStorage.length;i++){
  const key = localStorage.key(i)
  if(key.startsWith("user-")){
    const value = Number(localStorage.getItem(key))
    
    if (value>-1){
        const name = key.slice(5)
        state.rankingList.push({name,value})
    }
  }
}

  state.rankingList.sort((firstItem, secondItem) => firstItem.value - secondItem.value).reverse()
  
  return state.rankingList
}

}

const mutations= {
  addList(state,answer){
    console.log("selected now is: ",answer)
    state.ansList = state.ansList.filter(item => item.name !== answer.name)
    state.ansList.push(answer)
    console.log("ans list is: ", state.ansList)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}