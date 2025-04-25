<script lang="ts" setup>
import type AuthInput from "@/components/ui/AuthInput.vue";
import type { AccountTypes } from "@/stores/accounts";
import { ref } from "vue";

const accountType = ref<AccountTypes>("local");
</script>

<template>
  <v-form class="d-flex ga-4">
    <v-text-field class="flex-grow-1" />

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

    <AuthInput :hasPassword="accountType == 'local'" />
  </v-form>
</template>
