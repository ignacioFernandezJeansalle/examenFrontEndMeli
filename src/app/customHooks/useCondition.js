export function useCondition(condition) {
  condition = condition.toLowerCase();
  if (condition === "new") condition = "Nuevo";
  if (condition === "used") condition = "Usado";

  return { condition };
}
