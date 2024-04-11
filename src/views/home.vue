<template>
  <div>
    <a-row type="flex" justify="center" style="margin-top: 50px;" :gutter="16">
      <a-col :span="8">
        <a-input-search v-model:value="email" type="email" placeholder="Digite seu e-mail" :loading="loading"/>
      </a-col>
      <a-col :span="4">
        <a-button type="primary" @click="enviarEmail">Enviar</a-button>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-col :span="12">
        <a-alert :message="message" :type="type" show-icon style="margin-top: 20px;" v-if="message" />
      </a-col>
    </a-row>
  </div>
</template>


<script>

import {sendEmail} from "@/api/email/main.js"
export default {
  data() {
    return {
      email: '',
      loading: false,
      message: '',
      type: ""
    };
  },
  methods: {
    enviarEmail() {
      this.loading = true;
    sendEmail({ email: this.email })
        .then(response => {
          switch (response.data.mensagem) {
            case 'invalid_email':
              this.message = "E-mail inválido";
              this.type = 'error';
              break;
            case 'registered_email':
              this.message = "E-mail já cadastrado";
              this.type = 'success';
              break;
            case 'email_added':
              this.message = "E-mail cadastrado com sucesso";
              this.type = 'info';
              break;

          }
          console.log(response.data.mensagem);
          this.loading = false;
        })
        .catch(error => {
          this.message = "Ocorreu um erro ao processar a solicitação";
          this.type = 'error';
          console.error('Erro ao enviar e-mail:', error);
          this.loading = false;
        });
    }

  }

};
</script>

<style scoped>
.card {
  border: 1px solid grey;
  border-radius: 4px;
  margin-bottom: 16px;
}

.table {
  border: 1px solid grey;
  border-radius: 4px;
  margin-top: 20px;
}
</style>