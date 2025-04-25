<script setup lang="ts">
import type { Account } from "@/stores/accounts";
import { useAccountsStore } from "@/stores/accounts";
import { ref } from "vue";
import EditableForm from "../ui/EditableForm.vue";

const store = useAccountsStore();

function addAccount() {
  store.accounts.push({
    login: "",
    password: null,
    type: "LDAP",
    marks: [],
  } as Account);
}

function deleteAccount(i: Account) {
  store.accounts = store.accounts.filter((x) => x !== i);
}
</script>

<template>
  <v-card class="mx-8 my-8 px-8 py-8">
    <v-card-title
      >Учётные записи
      <v-btn
        density="compact"
        variant="tonal"
        icon="mdi mdi-plus"
        @click="addAccount"
      />
    </v-card-title>

    <nav>
      <ul class="d-flex text-center ga-4 my-4 pr-16">
        <span class="flex-grow-1">Метки</span>
        <span class="flex-grow-1">Тип записи</span>
        <span class="flex-grow-1">Логин</span>
        <span class="flex-grow-1">Пароль</span>
      </ul>
    </nav>
    <ul>
      <li v-for="i in store.accounts">
        <EditableForm
          v-model:login="i.login"
          v-model:password="i.password"
          v-model:account-type="i.type"
          v-model:marks="i.marks"
          @delete="() => deleteAccount(i)"
        />
      </li>
    </ul>
  </v-card>
</template>
