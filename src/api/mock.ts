import { AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mockServer = (axios: AxiosInstance) => {
  const mock = new AxiosMockAdapter(axios);
  const delay = 1000;

  // Mock authentication
  mock
    .onGet("/auth/me")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        uuid: "00000000-0000-0000-0000-000000000001",
        name: "John Doe",
        email: "john.doe@example.com",
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
      },
    });
  mock
    .onPost("/auth/register")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        token_type: "Bearer",
        access_token: "access_token_1",
        refresh_token: "refresh_token_1",
        expires_in: 3600,
        expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    });
  mock
    .onPost("/auth/login")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        token_type: "Bearer",
        access_token: "access_token_1",
        refresh_token: "refresh_token_1",
        expires_in: 3600,
        expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    });
  mock.onPost("/auth/logout").withDelayInMs(delay).reply(204, {});
};

export default mockServer;
