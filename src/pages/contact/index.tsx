import { useForm } from "react-hook-form";
import { AccordionContainer, AccordionContent, AccordionContentText, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, CodeView, ColumnContent, Form, FormAnnotation, Input, Label, Section, SucessMessage, TextArea } from "./styles";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { firstLetterUppercase } from "@/utils/first-letter-upper-case";
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";
import { api } from "@/lib/axios";
import Button from "@/components/button";
import Head from "next/head";
const sendEmailFormSchema = z.object({
  name: z
  .string()
  .min(3,{message: 'O nome deve conter pelo menos 3 letras.'})
  .regex(/^([a-z\\áàâãéèêíïóôõöúçñ ]+)$/i, {
    message: 'O usuário deve conter apenas letras.',
  })
  .transform((name) => firstLetterUppercase(name)),

  email: z
  .string()
  .min(1,{message: 'você deve adicionar um email.'})
  .email({message: 'digite o email corretamente.'})
  .transform((email) => email.toLowerCase()),

  message: z
  .string()
  .min(3,{message: 'A mensagem deve conter pelo menos 3 letras.'})
  .max(255, {message: 'A mensagem nao pode conter mais de 255 caracteres.'}),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export default function Contacts() {
  const [isEmailSend, setIsEmailSend] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors, isSubmitting },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  // call api to send email
  async function handleSendEmail(data: SendEmailFormData) {
    const {email,message,name} = data
    const response = await api.post('sendEmail', {email,message,name})
    if(response.status === 201) {
      setIsEmailSend(true)
      reset()
    }
  }
  const [emailValue, messageValue, nameValue] = watch(['email', 'message', 'name'])

  return (
    <>
      <Head>
        <title>Contato | Developer Henrique</title>
      </Head>
      <Section>
        <AccordionContainer>
        <AccordionRoot type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionHeader>
              <AccordionTrigger>
                <i className="ri-arrow-right-s-fill"></i>
                <p>contatos</p>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent style={{cursor: 'default'}}>
              <AccordionContentText><i className="ri-mail-fill"></i> <p>devhenrique.ramos@gmail.com</p></AccordionContentText>
              <AccordionContentText><i className="ri-phone-fill"></i> <p>+5594991250380</p></AccordionContentText>      
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
        </AccordionContainer>

        <ColumnContent>
          {isEmailSend
            ? <SucessMessage>
                <h2>OBRIGADO! 🤘</h2>
                <p>Sua mensagem foi recebida. Você receberar uma resposta em breve!</p>
                <Button onClick={()=> setIsEmailSend(false)} color="gray">send-new-message</Button>
              </SucessMessage> 
            : <Form as='form' onSubmit={handleSubmit(handleSendEmail)}>
                <Label>
                  <span>_nome: {errors.name ? <FormAnnotation>* {errors.name.message}</FormAnnotation>: ''}</span>
                  <Input type="text" {...register('name')} placeholder="insira seu nome"/>
                </Label>

                <Label>
                  <span>_email: {errors.email ? <FormAnnotation>* {errors.email.message}</FormAnnotation>: ''}</span>
                  <Input type="email" {...register('email')} placeholder="insira seu email" />
                </Label>

                <Label>
                  <span>_mensagem: {errors.message ? <FormAnnotation>* {errors.message.message}</FormAnnotation>: ''}</span>
                  <TextArea {...register('message')} placeholder="insira sua mensagem..."/>
                </Label>

                <Button submit disabled={isSubmitting} color="gray">submit-message</Button>
              </Form>
          }
          
        </ColumnContent>
        
        <CodeView>
          <p><span>&nbsp;1</span><span style={{color: '#C98BDF'}}>const</span> <span style={{color: '#5565E8'}}>button</span> = <span style={{color: '#5565E8'}}>document</span>.<span style={{color: '#5565E8'}}>querySelector</span>(<span style={{color: '#FEA55F'}}>'#sendBtn'</span>);</p>
          <p><span>&nbsp;2</span></p>
          <p><span>&nbsp;3</span><span style={{color: '#C98BDF'}}>const</span> <span style={{color: '#5565E8'}}>message</span>  = {'{'}</p>
          <p><span>&nbsp;4</span> &nbsp;<span style={{color: '#5565E8'}}>name</span>: <span style={{color: '#FEA55F'}}>"{nameValue}"</span>,</p>
          <p><span>&nbsp;5</span> &nbsp;<span style={{color: '#5565E8'}}>email</span>: <span style={{color: '#FEA55F'}}>"{emailValue}"</span>,</p>
          <p><span>&nbsp;6</span> &nbsp;<span style={{color: '#5565E8'}}>message</span>: <span style={{color: '#FEA55F'}}>"{messageValue}"</span>,</p>
          <p><span>&nbsp;7</span> &nbsp;<span style={{color: '#5565E8'}}>date</span>: <span style={{color: '#FEA55F'}}>"{format(new Date(), "EEEE dd 'de' MMMM", {locale: ptBR})}"</span>,</p>
          <p><span>&nbsp;8</span>{'}'}</p>
          <p><span>&nbsp;9</span></p>
          <p><span>10</span><span style={{color: '#5565E8'}}>button</span>.<span style={{color: '#5565E8'}}>addEventListener</span>{"("}<span style={{color: '#FEA55F'}}>'click'</span>, () <span style={{color: '#C98BDF'}}>{"=>"}</span> {"{"}</p>
          <p><span>11</span> &nbsp;<span style={{color: '#5565E8'}}>form</span>.<span style={{color: '#5565E8'}}>send</span>(<span style={{color: '#5565E8'}}>message</span>);</p>
          <p><span>12</span>{"})"}</p>
        </CodeView>
      </Section>
    </>
  )
}