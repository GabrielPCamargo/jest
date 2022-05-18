import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    //System under under test
    const sut = createIndividualCustomer('gabriel', 'camargo', '46989865');
    expect(sut).toHaveProperty('firstName', 'gabriel');
    expect(sut).toHaveProperty('lastName', 'camargo');
    expect(sut).toHaveProperty('cpf', '46989865');
  });

  it('should have methods to get name and idn', () => {
    //System under under test
    const sut = createIndividualCustomer('gabriel', 'camargo', '46989865');
    expect(sut.getName()).toBe('gabriel camargo');
    expect(sut.getIDN()).toBe('46989865');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    //System under under test
    const sut = createEnterpriseCustomer('udemy', '46989865');
    expect(sut).toHaveProperty('name', 'udemy');
    expect(sut).toHaveProperty('cnpj', '46989865');
  });

  it('should have methods to get name and idn', () => {
    //System under under test
    const sut = createEnterpriseCustomer('udemy', '46989865');
    expect(sut.getName()).toBe('udemy');
    expect(sut.getIDN()).toBe('46989865');
  });
});
