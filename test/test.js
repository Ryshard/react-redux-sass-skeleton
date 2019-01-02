import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import CarListItem from '../src/components/car-list-item';


describe('Cars List item compoinent', () => {
    let componentMount;
    let onButtonClick;

    const sampleCar = {
        airConditionInd: "true",
        baggageQuantity: "2",
        charge: {
            currency: "CAD",
            estimated: "731.47",
            total: "731.47",
        },
        code: "ECAR",
        codeContext: "CARTRAWLER",
        doorCount: "2",
        driveType: "Unspecified",
        fuelType: "Petrol",
        model: "Kia Rio or similar",
        passengerQuantity: "5",
        pictureUrl: "https://cdn.cartrawler.com/otaimages/kia/rio_nologo.jpg",
        status: "Available",
        transmissionType: "Automatic",
        vendor: { name: "HERTZ", code: "2338" }
    };

    beforeEach(() => {
        onButtonClick = spy();
        componentMount = shallow(<CarListItem car={sampleCar} expand={onButtonClick} />);
    });

    afterEach(() => {
        componentMount = null;
        onButtonClick = null;
    });

    it('renders an img', () => {
        expect(componentMount.find('img')).to.have.lengthOf(1);
    });

    it('renders an heading', () => {
        expect(componentMount.find('h2')).to.have.lengthOf(1);
    });

    it('heading title', () => {
        expect(componentMount.find('h2').text()).to.be.equal(sampleCar.model);
    });

    it('has a button', () => {
        expect(componentMount.find('.btn')).to.have.lengthOf(1);
    });


    it('btn click trigers expand', () => {
        componentMount.find('.btn').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });




});
