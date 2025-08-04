import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  it("상품 정보가 화면에 표시된다.", () => {
    render(<ProductCard badgeCount={0} setBadgeCount={() => {}} />);
    expect(screen.getByText("브랜드A")).toBeInTheDocument();
    expect(screen.getByText("편안하고 착용감이 좋은 신발")).toBeInTheDocument();
    expect(screen.getByText("35,000원")).toBeInTheDocument();
  });

  it("버튼 클릭 시 카트에 담기 상태로 바뀌고 setBadgeCount가 호출된다.", () => {
    const mockSetBadgeCount = jest.fn();
    render(<ProductCard badgeCount={0} setBadgeCount={mockSetBadgeCount} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("담기");

    fireEvent.click(button);

    expect(button).toHaveTextContent("담김!");
    expect(mockSetBadgeCount).toHaveBeenCalledWith(1);
  });

  it("이미 담긴 상품을 다시 담으면 alert가 뜨고 setBadgeCount는 호출되지 않는다.", () => {
    const mockSetBadgeCount = jest.fn();
    // window.alert mocking
    window.alert = jest.fn();

    render(<ProductCard badgeCount={0} setBadgeCount={mockSetBadgeCount} />);

    const button = screen.getByRole("button");

    // 첫 클릭
    fireEvent.click(button);
    expect(mockSetBadgeCount).toHaveBeenCalledTimes(1);

    // 두 번째 클릭
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("해당 상품은 이미 담겨있습니다.");
    expect(mockSetBadgeCount).toHaveBeenCalledTimes(1); // 호출 횟수는 여전히 1
  });
});
