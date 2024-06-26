import { useState } from 'react';
import Footer from "../../../../components/Footer";
import { Input, Stack, FormControl, FormLabel, Checkbox, Button, Heading, Grid, Box } from '@chakra-ui/react';
import Nav from '../../../../components/Nav/navEmpresa';

function CadastroEmpresa() {
  const [cnpj, setCnpj] = useState('');

  const handleCpfChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = formatCpf(value);
    setCpf(formattedValue);
  };

  const formatCpf = (value) => {
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  };

  return (
    <>
      <Nav />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} style={{ flex: '1' }}>
          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <img src="./dist/assets/imagem/imagemCadastroEmpresa.png" alt="" style={{ width: '100%', maxWidth: 'auto' }} />
          </div>
          <Box maxWidth="400px" mt="25px" mb="20px" ml={{ base: 0, md: '40px' }}>
            <Heading className='d-flex justify-content-center' as="h1" size="lg" color="#F9A826" mb={4}>CADASTRO</Heading>

            <form>

              <FormControl isRequired>
                <FormLabel>Nome Completo</FormLabel>
                <Input type='text' placeholder='Nome Completo' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>CNPJ</FormLabel>
                <Input type='text' placeholder='CNPJ' value={cnpj} onChange={handleCpfChange} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type='password' placeholder='Senha' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input type='password' placeholder='Confirmar Senha' />
              </FormControl>

              <Stack spacing={6} direction="row" align="center">
                <Checkbox defaultChecked>Concordo com os termos de privacidade e política.</Checkbox>
              </Stack>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" colorScheme="orange" mt={4} width="50%" borderRadius="20px">
                  Cadastrar
                </Button>
              </div>

            </form>
          </Box>
        </Grid>
        <Footer />
      </div>
    </>
  );
}

export default CadastroEmpresa;
