import { addAlert } from '../store/messages/AlertReducer';
import { CodeAlertsMessage } from '../constants/CodeAlertsMessage';
import { CodeErrorMessage } from '../constants/CodeErrorMessage';
import { API } from './config/ApiConfigure';

export const getDashboard = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(API + '/post')
        .then(el => el.json())
      return data;
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: CodeErrorMessage.FAILED_LOAD_DASHBOARD,
        }),
      );
    }
  };
};

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      await fetch(API + '/user',
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.SUCCESS,
          message: 'Colaborador cadastrado com sucesso',
        }),
      );
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: 'Erro ao cadastrar colaborador',
        }),
      );
    }
  }
}


export const getCollabById = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`${API}/post/${id}`)
        .then(el => el.json())
      return data;
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: CodeErrorMessage.FAILED_LOAD_DASHBOARD,
        }),
      );
    }
  };
};

export const newDashboard = () => {
  return async (dispatch) => {
    try {
      const data = await fetch(API + '/user')
        .then(el => el.json())
      return data;
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: CodeErrorMessage.FAILED_LOAD_DASHBOARD,
        }),
      );
    }
  };
};

export const getCommentsById = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`${API}/comments?post_id=${id}`)
        .then(el => el.json())
      return data;
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: CodeErrorMessage.FAILED_LOAD_DASHBOARD,
        }),
      );
    }
  };
};




export const createCollaborator = (data) => {
  return async (dispatch) => {
    try {
      await fetch(API + '/post',
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.SUCCESS,
          message: 'Colaborador cadastrado com sucesso',
        }),
      );
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: 'Erro ao cadastrar colaborador',
        }),
      );
    }
  }
}

export const createComments = (data) => {
  return async (dispatch) => {
    try {
      await fetch(API + '/comments',
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.SUCCESS,
          message: 'Comentário criado com sucesso',
        }),
      );
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: 'Erro ao criar comentário',
        }),
      );
    }
  }
}


export const patchInteraction = (data, id, action) => {
  return async (dispatch) => {
    try {
     
      await fetch(API + `/post/${id}?${action}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
       
    } catch (e) {
      dispatch(
        addAlert({
          severity: CodeAlertsMessage.ERROR,
          message: 'Erro ao criar comentário',
        }),
      );
 
    }
  }
}







