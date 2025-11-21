import { toast } from "sonner"
import * as z from "zod"
import { useForm } from "@tanstack/react-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Mail ,Phone,MapPin} from "lucide-react"
import { useAddProduct } from "@/hooks/use-product"



const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").optional(),
  phone_number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  location: z.string().optional(),


})

export function EditProfileForm() {

  const addProductMutation = useAddProduct();

  const form = useForm({
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      location: "",

    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {

      await addProductMutation.mutateAsync(value);

      if (addProductMutation.isError) {
        toast.error("Error submitting form: " + addProductMutation.error.message);
        return;
      }

      form.reset();
      

      toast.success("Form submitted successfully")
    },
  })

  return (
    <Card className="w-full border-0 shadow-none">
     
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup className="flex flex-row">
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Your Name"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
                
              }}
            />
              <form.Field
              name="last_name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Your last name"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
                
              }}
            />



            

            {/* <FieldGroup className="flex " >
            <form.Field
              name="price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="number"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                      placeholder="Product price"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
              /> 
            
              <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Product description"
                        aria-invalid={isInvalid}
                      />
                    </InputGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
              />

              <form.Field
              name="in_stock"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field orientation="horizontal" data-invalid={isInvalid}>
                        <Checkbox
                          id={field.name}
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={(checked) =>
                            field.handleChange(checked === true)
                          }
                    />
                        <FieldLabel
                          htmlFor={field.name}
                          className="font-normal"
                        >
                          Product in stock
                        </FieldLabel>
                      </Field>
                )
              }}
              />
          </FieldGroup> */}
          
          </FieldGroup>
          <FieldGroup className="flex flex-row mt-10">
                        <form.Field
              name="phone_number"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <div className="items-center flex flex-row ">
                      <Phone className="inline mr-2 h-4 w-4 text-muted-foreground" />
                      <FieldLabel htmlFor={field.name}>
                        Phone Number</FieldLabel>
                        
                    </div>
                  
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="932651371"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
                
              }}
            />
              <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                  <div className="items-center flex flex-row ">
                      <Mail className="inline mr-2 h-4 w-4 text-muted-foreground" />
                      <FieldLabel htmlFor={field.name}>
                        Email</FieldLabel>
                        
                    </div>
                  
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="email@example.com"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
                
              }}
            />
          

          </FieldGroup>
          <FieldGroup className="mt-5 max-w-md mt-10">

            <form.Field
                      name="location"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                          <Field data-invalid={isInvalid}>
                            <div className="items-center flex flex-row ">
                              <MapPin className="inline mr-2 h-4 w-4 text-muted-foreground" />
                              <FieldLabel htmlFor={field.name}>
                                Location</FieldLabel>
                                
                            </div>
                          
                            <Input
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => field.handleChange(e.target.value)}
                              placeholder="Aveiro"
                              aria-invalid={isInvalid}
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        )
                        
                      }}
                    />

          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" className="cursor-pointer" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-chart-1 hover:bg-green-500 cursor-pointer" form="bug-report-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}