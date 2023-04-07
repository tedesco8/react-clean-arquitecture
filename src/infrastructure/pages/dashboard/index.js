import { Fragment, useState, useEffect } from "react";
import { CardBox, Card } from "../../components";

import ExampleService from "../../../application/services/example.service.ts";
import ExampleRepository from "../../repositories/example.repository.ts";

export default function DashboardPage() {
  const exampleService = new ExampleService(new ExampleRepository());

  const [examples, setExamples] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    exampleService.getAll({
      onSuccess: (res) => setExamples(() => res),
      onError: (error) => console.error(error),
    });
  }

  return (
    <Fragment>
      <h1 className="text-center">Dashboard</h1>
      <CardBox>
        {examples.length > 0 && examples.map((item) => (
          <Fragment>
            <Card name={item.name} numbers={item.numbers} icon={item.icon} />
          </Fragment>
        ))}
      </CardBox>
    </Fragment>
  );
}