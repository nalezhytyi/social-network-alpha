import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from the props should be in the state", () => {
        const component = create(<ProfileStatus status="hello mfka"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hello mfka");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="hello mfka"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    });

    test("after creation <span> should be displayed status", () => {
        const component = create(<ProfileStatus status="hello sir"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('hello mfka');
    });

    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status="hello sir"/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="hello sir"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("hello sir");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="hello sir" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});
