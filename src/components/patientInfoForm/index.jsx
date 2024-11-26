import { Button, DatePicker, Input } from "@nextui-org/react";
import React from "react";

const PatientInfoForm = () => {
  return (
    <>
      <p>Personal Information</p>
      <Input
        type="text"
        label="Name"
        placeholder="Rahul Roy"
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
      />
      <Input
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
      />
      <Input
        type="phone"
        label="Phone Number"
        placeholder="1234567890"
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
      />
      <DatePicker
        label="Date of Birth"
        radius="sm"
        variant="bordered"
        labelPlacement="outside"
      />
      <Button color="primary" radius="sm" fullWidth>
        Button
      </Button>
    </>
  );
};

export default PatientInfoForm;
