import React, { useState } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, Input, SECONDARY } from '../src/index';

export const Form = () => {
  const [ name, setName ] = useState();
  const [ address, setAddress ] = useState();
  const [ submitted, setSubmitted ] = useState(false)
  return (
    <form>
      <label htmlFor="name">Name</label>
      <Input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="address">Address</label>
      <Input id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant={SECONDARY} type="button" onClick={()=>setSubmitted(true)}>Submit</Button>
      {submitted && <span>Form has been submitted</span>}
    </form>
  )}

export default {
  component: Form,
  title: 'components/Forms',
  parameters: {
    docs: {
      page: null
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    }
  }
}


export const FormAutoPlay = {
  ...Form,
  play: async () => {
    await new Promise(r=>setTimeout(()=>r(), 300));
    userEvent.type(screen.getByLabelText("Name"), 'Lorem');
    await new Promise(r=>setTimeout(()=>r(), 500));
    userEvent.type(screen.getByLabelText("Address"), '123 Street');
    await new Promise(r=>setTimeout(()=>r(), 500));
    userEvent.click(screen.getByText("Submit"));
  }
}
