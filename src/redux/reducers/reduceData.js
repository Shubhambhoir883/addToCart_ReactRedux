const InitialState = {
  allData: [],
};

export const reduceData = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        allData: [...state.allData, action.payload],
      };

    case "RMV_ONE":
      const IteamIndex_dec = state.allData.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.allData[IteamIndex_dec].qnty >= 1) {
        const dltiteams = (state.allData[IteamIndex_dec].qnty -= 1);
        console.log([...state.allData, dltiteams]);

        return {
          ...state,
          allData: [...state.allData],
        };
      } else if (state.allData[IteamIndex_dec].qnty === 1) {
        const data = state.allData.filter((el) => el.id !== action.payload);

        return {
          ...state,
          allData: data,
        };
      }
    
    break; 

    case "RMV_CART":
        const data = state.allData.filter((el)=>el.id !== action.payload); 
        // console.log(data);

        return {
            ...state,
            allData:data
        }

    default:
      return {
        ...state,
      };
  }
};
