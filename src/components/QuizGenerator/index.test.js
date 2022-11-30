import { it, expect, beforeEach, describe, jest } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuizGenerator from "../QuizGenerator";
import App from "../App"

it('tests function passed down to QuizGenerator works properly', () => {

    const baseProps = {
        setTopics: jest.fn()
        
      };

    render(<QuizGenerator setTopics={baseProps.setTopics}/>);
    
    expect(baseProps.setTopics).toHaveBeenCalled();
  });
  
  