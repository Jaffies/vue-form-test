<script lang="ts" setup>
import { watch } from "vue";
import { ref } from "vue";
import type { ValidationRule } from "vuetify";
const { hasPassword } = defineProps<{
  hasPassword: boolean;
}>();

const login = defineModel<string>("login");
const password = defineModel<string | null>("password");

const validate = ref<boolean | null>(null);
const showPassword = ref<boolean>(false);

watch(
  () => hasPassword,
  () => {
    if (hasPassword) password.value = "";
    else password.value = null;
  },
);

const loginRules: ValidationRule[] = [
  (value) => {
    if (value) return true;
    return "Введите логин";
  },
];

const passwordRules: ValidationRule[] = [
  (value) => {
    if (value) return true;
    return "Введите пароль";
  },
];
</script>

<template>
  <v-form v-model="validate" style="flex-grow: 2" class="d-flex ga-4">
    <v-text-field :rules="loginRules" label="Логин" v-model="login" />
    <v-text-field
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
      label="Пароль"
      v-model="password"
      v-if="hasPassword"
    />
  </v-form>
</template>
