import http from "k6/http";
import { sleep } from "k6";
import {check} from "k6";

export let options = {

  stages: [
    {duration: "10s", target: 5 },
    {duration: "120s", target:  5},
  ]
};

export default function() {
  const id = Math.floor(Math.random() * 10000000);
  let res =  http.get(`http://localhost:3005/api/buytest/one/${id}`);
  check(res, {
    "status is 200": (r) => r.status === 200,
  })
}
