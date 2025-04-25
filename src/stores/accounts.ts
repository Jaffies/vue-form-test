import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

type AccountTypes = "local" | "LDAP";

type Account =
	| {
			marks: string[];
			type: "LDAP";
			login: string;
			password: null;
	  }
	| {
			marks: string[];
			type: "local";
			login: string;
			password: string;
	  };

export type { Account, AccountTypes };
export const useAccountsStore = defineStore("counter", () => {
	const accounts = useStorage<Account[]>("accounts-store", []);

	return { accounts };
});
