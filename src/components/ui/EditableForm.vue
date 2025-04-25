<script lang="ts" setup>
import { parseMarks, constructMarks } from "@/logic/marks";
import type AuthInput from "./AuthInput.vue";
import type { AccountTypes } from "@/stores/accounts";
import { ref, watch } from "vue";
import { onMounted } from "vue";

const accountType = defineModel<AccountTypes>("accountType");

const marksText = ref<string>("");
const marks = defineModel<string[]>("marks");
const login = defineModel<string>("login");
const password = defineModel<string | null>("password");

watch(marksText, () => {
  marks.value = parseMarks(marksText.value);
});

onMounted(() => {
  marksText.value = constructMarks(marks.value || []);
});

watch(marks, () => {
  marksText.value = constructMarks(marks.value || []);
});

const emit = defineEmits(["delete"]);
</script>

<template>
  <v-form class="d-flex ga-4">
    <v-text-field class="flex-grow-1" v-model="marksText" />

    <div class="flex-grow-1">
      <v-select
        label="Тип аккаунта"
        v-model="accountType"
        :items="[
          { title: 'LDAP', value: 'LDAP' },
          { title: 'Локальная', value: 'local' },
        ]"
      />
    </div>

    <AuthInput
      v-model:login="login"
      v-model:password="password"
      :hasPassword="accountType == 'local'"
    />

    <v-btn icon="mdi mdi-delete" @click="emit('delete')" />
  </v-form>
</template>
