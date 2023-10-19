"use server";

const mainAPIURL = "https://dev.proj-mgmt.com/main1.0/isapi.dll";
const masterAPIURL = "https://dev.proj-mgmt.com/api/masteradm20.dll";
import React from "react";
import { DEBUG } from "./utils";
import { authOptions } from "@/app/api/auth/authoptions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, Session } from "next-auth";
import { getServerSession } from "next-auth";
import {json} from "stream/consumers";
import { Portal } from "@/components/CardDetailsPortal";
async function getToken() {
  const session: Session | null = await getServerSession(authOptions);
  const token = session?.user.token;
  return token;
}
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
/* *** login ****
Autenticação do usuário no portal.
Retorna um Token que deve ser enviado pelas demais funções para validar o
usuário e permitir a execução no lado do backend.
Também retorna um array contendo os portais que o usuário tem acesso.
Parâmetros:
email: string
password: string
portal: string [opcional]
 */
export async function login(
  email: string,
  password: string
) {
  

  return fetch(`${mainAPIURL}/login`, {
     method: "POST",
    cache: "no-cache",
    headers: {
      
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password

    }),
  }).then((response) => {
    if (response.ok) {
      
      return response.json();
  
      
    } else {
      return false;
    }
  });
}

/* *** get_user ****
Retorna nome, email e foto do usuário
Parâmetros:
client_id: integer
 */
export async function get_user(client_id: Number) {
  const data = {
    client_id: client_id ? client_id.toString() : "9",
  };
  const token = await getToken();

  return fetch(`${mainAPIURL}/get_user`, {
     method: "POST",
    cache: "no-cache",
    headers: {
      
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: client_id,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return token;
    }
  });
}
/* *** get_user_access ****
Retorna acessos do usuário aos módulos Adm/Man/Tech
Devolve a lista completa de acessos possíveis, na coluna “level” será
retornado o nível de permissão do usuário. Quando “level” for igual a zero,
significa que o usuário não possui permissão de acesso.
Valores possíveis para “level”:
0 - sem acesso
1 - permissão somente de visualização
2 - permissão de modificação
3 - permissão de modificação e recursos especiais
9 - acesso master - não pode ser removido
Parâmetros:
client_id: int
 */
export async function get_user_access(client_id: Number) {
  const data = {
    client_id: client_id ? client_id.toString() : "9",
  };
  const token = await getToken();

  return fetch(`${mainAPIURL}/get_user_access`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: client_id,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return token;
    }
  });
}
/* *** retrieve_password ****
Envia e-mail para usuário com link para forçar a senha
O link apontará para uma rota do React e envia como parâmetro GET um
token que será retornado para a função /force_password para completar o
processo de recuteração de senha
Parâmetros:
email: string
 */
export async function retrieve_password(email: string) {
  return fetch(`${mainAPIURL}/retrive_password`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })
    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}
/* *** reset_password ****
Trocar a senha do usuário
Parâmetros:
current_password: string
new_password: string
 */
export async function reset_password(password: string, newpassword: string) {
  const token = await getToken();
  return fetch(`${mainAPIURL}/reset_password`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      current_password : password,
      new_password: newpassword
      }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** get_clients ****
Retorna portais que o usuário tem acesso

 */
export async function get_clients() {
  
  const token = await getToken();

  return fetch(`${mainAPIURL}/get_user_access`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return token;
    }
  });
}

/* *** set_language ****
Atualiza idioma padrão do usuário
Parâmetros:
language: string
ex: pt-BR / en-US

BODY raw
 */
export async function set_language(language: string) {
  
  const token = await getToken();

  return fetch(`${mainAPIURL}/set_language`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      language : language
    }),
  }).then((response) => {
    if (response.ok) {
      return true;
    } else {
      return token;
    }
  });
}

/* *** getdatetime ****
Retorna data e hora do servidor

BODY raw
 */
export async function getdatetime(client_id: Number) {
  
  const token = await getToken();

  return fetch(`${mainAPIURL}/getdatetime`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id : client_id
    }),
  }).then((response) => {
    if (response.ok) {
      return true;
    } else {
      return token;
    }
  });
}

/* *** get_portals ****
Retorna portais que o usuário tem acesso
Parâmetros:
search_text: string
show_nactive: boolean
 */
export async function get_portals(
 
  search_text: string,
  show_inactive: boolean,
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/get_portals`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      search_text: search_text,
      show_inactive: show_inactive,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        // console.log(result);
      }
      return result;
    });
}

/* *** update_portal ****
Cria ou modifica um portal de cliente
Parâmetros da requisição “form-data”
client_id: int
portal_name: string
name: string
company_name: string
register: string
address: string
number: int
district: string
city: string
state: string
zip: string
phone: string
contact: string
mail: string
password: string
primary_color: string
secundary_color: string
inactive: boolean
access_timesheet: boolean
access_tasklist: boolean

Example Request
sample_sem_logos

POST {{url}}/update_portal

Example Response
201 - Created

{"message" : "Portal sucessfully saved"}
View More

payment_method: int
files[]: array[files]
Payment_methods:
1 = credit card
2 = ticket
Se não informado o client_id a função irá incluir um novo portal, senão a
função irá modificar os dados do client_id informado
No caso de criação de um novo portal a função irá enviar automaticamente o
e-mail com informações de acesso para o e-mail informado
 */
export async function update_portal(
  currentPortal: Portal,

) {
/*
  => obj || false
  */

const base64image1 = `data:image/png;base64, ${currentPortal.logo_report}`;
const response1 = await fetch(base64image1);
const blob1 = await response1.blob();

const base64image2 = `data:image/png;base64, ${currentPortal.logo_screen}`;
const response2 = await fetch(base64image2);
const blob2 = await response2.blob();


const data: FormData = new FormData();

data.append('client_id', currentPortal.client_id);
data.append('portal_name', currentPortal.portal);
data.append('name', currentPortal.name);
data.append('company_name', currentPortal.company);
data.append('register', currentPortal.register);
data.append('address', currentPortal.address);
data.append('number', currentPortal.number);
data.append('district', currentPortal.district);
data.append('city', currentPortal.city);
data.append('state', currentPortal.state);
data.append('zip', currentPortal.zip);
data.append('phone', currentPortal.phone);
data.append('contact', currentPortal.contact);
data.append('mail', currentPortal.mail);
data.append('password', currentPortal.password);
data.append('primary_color', currentPortal.primary_color);
data.append('secundary_color', currentPortal.secundary_color);
data.append('inactive', currentPortal.inactive);
data.append('access_timesheet', currentPortal.access_timesheet);
data.append('access_tasklist', currentPortal.access_tasklist);
data.append('payment_method', currentPortal.payment_method);
data.append('files[]', blob1, 'biglogo.png');
data.append('files[]', blob2, 'smalllogo.png');
// data.append('files', currentPortal.logo_screen);



const token = await getToken();
return fetch(`https://dev.proj-mgmt.com/masteradm2.0/isapi.dll/update_portal`, {
  method: "POST",
  cache: "no-cache",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body: data ,
})
    .then((response) => {
      console.log(response);
      let respJson;
      if (response.ok) {
        try{
          respJson = response.json();
          return respJson;
        } catch (e){
          respJson = response;
        }
      } else {
        return false;
      }
      return respJson;
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** delete_portal ****
Exclui um portal juntamente com todos os registros existentes nas tabelas de
cadastro, tasklist e timesheet
Esta operação é irreversível
Parâmetros:
client_id: int
 */
export async function delete_portal(
 
  client_id: Number
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/delete_portal`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: client_id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** send_adm_access ****
Envia por e-mail o link para recuperação de senha com os dados de acesso ao
portal
Parâmetros:
client_id: int
email: string
 */
export async function send_adm_access(
 
  client_id: Number,
  email: string
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/send_adm_access`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: client_id,
      email: email
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** get_master_users ****
Retorna os usuários que possuem acesso ao portal Master-ADM
Parâmetros:
search_text: string (opcional)
_limit: int (opcional)
_page: int (opcional)
 */
export async function get_master_users(
 
  search_text?: string,
  limit?: Number,
  page?: Number 
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/get_master_users`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      search_text: search_text,
      _limit: limit,
      _page: page
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** update_master_users ****
Inclui ou exclui acesso de usuário no portal Master-ADM
Parâmetros:
email: string
operation: int
Valores para operation:
1 = inclusão de usuário
2 = reservado
3 = exclusão de usuário
 */
export async function update_master_users(
 
  email: string,
  operation: Number
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/update_master_users`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
      operation: operation
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}


/* *** get_new_users ****
Retorna a quantidade de empregados criados nos últimos 12 meses
Parâmetros:
reference_date: date
> data de referência para a função extrair o mês para calcular os 12 meses
anteriores
 */
export async function get_new_users(
 
  reference_date?: string
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/get_new_users`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      reference_date: reference_date? reference_date: getDate()
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** get_users_summ ****
Retorna a quantidade total de portais e usuários
 */
export async function get_users_summ(
 
) {
  /*
    => obj || false
    */
  const token = await getToken();
  return fetch(`${masterAPIURL}/get_users_summ`, {
     method: "POST",
    cache: "no-cache",
    headers: {
       
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })

    .then((result) => {
      if (DEBUG) {
        console.log(result);
      }
      return result;
    });
}

/* *** get_users_by_portals ****
Retorna a quantidade de usuários por portal
 */
export async function get_users_by_portals(
 
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_users_by_portals`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

  /* *** get_projects_summ ****
Retorna a quantidade total de projetos e subprojetos
 */
export async function get_projects_summ(
 
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_projects_summ`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

    /* *** get_projects_by_portals ****
Retorna a quantidade total de projetos e subprojetos por portal
 */
export async function get_projects_by_portals(
 
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_projects_by_portals`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

      /* *** get_reports_summ ****
Retorna a quantidade total de relatorios de horas e a somatória de horas
lançadas
 */
export async function get_reports_summ(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_reports_summ`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()

      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

        /* *** get_reports_by_portals ****
Retorna a quantidade total de relatórios de horas e somatória de horas
lançadas por portal
 */
export async function get_reports_by_portals(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_reports_by_portals`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

          /* *** get_reports_by_month ****
Retorna a quantidade de relatórios de horas e somatória de horas por mês
Parâmetros:
reference_date: date
Retorna os últimos 12 meses considerando o parâmetro reference_date
 */
export async function get_reports_by_month(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_reports_by_month`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

            /* *** get_tasklists_summ ****

Retorna o total de tasklists ativas e arquivadas nos último 30 dias 
considerando o parâmetro reference_date
 */
export async function get_tasklists_summ(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_tasklists_summ`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

              /* *** get_tasklists_by_portals ****

Retorna o total de tasklists ativas e arquivadas por portal nos últimos 30 dias
Parâmetros:
reference_date: date
 */
export async function get_tasklists_by_portals(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_tasklists_by_portals`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }
  
              /* *** get_tasks_summ ****

Retorna o total de tarefas abertas, fechadas e excluídas nos último 30 dias
Parâmetros:
reference_date: date
 */
export async function get_tasks_summ(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_tasks_summ`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }

                /* *** get_tasks_by_portals ****

Retorna o total de tarefas abertas, fechadas e excluídas nos último 30 dias por
portal
Parâmetros:
reference_date: date
 */
export async function get_tasks_by_portals(
  reference_date?: string
  ) {
    /*
      => obj || false
      */
    const token = await getToken();
    return fetch(`${masterAPIURL}/get_tasks_by_portals`, {
       method: "POST",
    cache: "no-cache",
      headers: {
         
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference_date: reference_date? reference_date: getDate()
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
  
      .then((result) => {
        if (DEBUG) {
          console.log(result);
        }
        return result;
      });
  }
