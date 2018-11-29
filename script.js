import http from "k6/http";
import { sleep } from "k6";
import {check} from "k6";

export let options = {

  stages: [
    {duration: "10s", target: 5 }

  ]
};

export default function() {
  // const id = Math.floor(Math.random() * 10000000);
  // let res =  http.get(`http://localhost:3005/api/buytest/one/${id}`);
  let id = 10000002;
  id +=1;
  var url = 'http://localhost:3005/api/buytest/10000001';
  var payload = JSON.stringify({ id: %{id}, symbol: "aitlekd", companyname: "bobblehead", marketprice: 35.09 });
  var params =  { headers: { "Content-Type": "application/json" } };

  http.post(url, payload, params);
  check(res, {
    "status is 201": (r) => r.status === 201,
  })
}
