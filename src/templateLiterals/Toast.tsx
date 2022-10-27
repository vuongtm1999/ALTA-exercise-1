type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    // Exclue là loại bỏ ở tham số thứ 2 /* -> 'center-center' */ nếu Exclude sai thì trả về 'center
    // Kệ cái a pipe character ở đầu đi (thầy kiêu vậy :))
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>
}