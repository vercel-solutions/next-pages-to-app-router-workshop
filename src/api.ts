import {Schedule, Store} from "./types";

const api = {
  store: {
    list: async (): Promise<Store[]> =>
      fetch(`https://solutions-acme-stores-api.vercel.app/api/store`).then((res) => res.json()),
    fetch: async (id: string): Promise<Store> =>
      fetch(`https://solutions-acme-stores-api.vercel.app/api/store/${id}`).then((res) =>
        res.json(),
      ),
    visitors: {
      fetch: async (id: Store["id"]): Promise<number> =>
        fetch(`https://solutions-acme-stores-api.vercel.app/api/store/${id}/visitors`)
          .then((res) => res.json())
          .then(({visitors}) => visitors),
    },
    rating: {
      fetch: async (id: Store["id"]): Promise<number> =>
        fetch(`https://solutions-acme-stores-api.vercel.app/api/store/${id}/rating`)
          .then((res) => res.json())
          .then(({rating}) => rating),
      update: async (id: Store["id"], value: number) =>
        fetch(
          `https://solutions-acme-stores-api.vercel.app/api/store/${id}/rating?value=${value}`,
          {
            method: "POST",
          },
        )
          .then((res) => res.json())
          .then(({rating}) => rating),
    },
    schedule: {
      fetch: async (id: Store["id"], timezone: string = "UTC"): Promise<Schedule[]> =>
        fetch(
          `https://solutions-acme-stores-api.vercel.app/api/store/${id}/schedule?timezone=${timezone}`,
        ).then((res) => res.json()),
    },
  },
};

export default api;
