//TODO: Manage to edit a simple user ("index.js:2178 Warning: Missing translation for key: "params cannot be empty"")

import {
  Edit,
  List,
  Show,
  Create,
  ChipField,
  Datagrid,
  DisabledInput,
  EditButton,
  ReferenceManyField,
  ReferenceField,
  ShowButton,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
  Filter,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";
import React from 'react'

export const ProductFilter = props => (
  <Filter {...props}>
    <TextInput label="Search by name" source="name_contains" alwaysOn />
  </Filter>
)

export const ProductList = props => (
  <List filters={<ProductFilter />} {...props}>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="name"/>
      <ReferenceField label="Brand" source="brand.id" reference="Brand">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Category" source="category.id" reference="Category">
        <TextField source="name" />
      </ReferenceField>
      <EditButton/>
      <ShowButton/>
    </Datagrid>
  </List>
);

export const ProductEdit = props => (
  <Edit title="Edit a product" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <ReferenceInput source="brand.id" reference="Brand">
        <SelectInput optionText="name"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProductShow = props => (
  <Show title="Show a product" {...props}>
    <DisabledInput source="id" />
    <TextInput source="name" />
    <ReferenceManyField label="Options" target="author.id" reference="Comment">
      <SingleFieldList>
        <ChipField source="content" />
      </SingleFieldList>
    </ReferenceManyField>
  </Show>
);

export const ProductCreate = props => (
  <Create title="Create a product" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);