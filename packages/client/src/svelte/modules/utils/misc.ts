export const toCamelCase = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

export function shortenAddress(s: string) {
  return s ? s.slice(0, 8) + "..." + s.slice(-8) : ""
}

export function addressToColor(address: string): string {
  if (!address || address.length < 6) return "#FF0000"
  // Take the last 6 characters of the hash
  address = address.slice(-6)
  // Prefix with '#' to create a valid hex color code
  return "#" + address
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getUniqueValues<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

export function filterObjectByKey(
  obj: { [key: string]: any },
  keysToKeep: string[]
): { [key: string]: any } {
  const filteredObj: { [key: string]: any } = {}

  keysToKeep.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      filteredObj[key] = obj[key]
    }
  })

  return filteredObj
}

/**
 * Filters an object to return only those key/value pairs where the value's
 * `metadata.tableName` starts with the specified namespace.
 * @template T - Type of the value that should have an optional metadata property with an optional tableName string.
 * @param {Record<string, T>} data - The data object to filter.
 * @param {string} namespace - The namespace to filter by.
 * @returns {Record<string, T>} - An object containing only the key/value pairs that match the filter condition.
 */
export function filterByNamespace<
  T extends { metadata?: { tableName?: string } },
>(data: Record<string, T>, namespace: string): Record<string, T> {
  return Object.entries(data)
    .filter(([_, value]) => {
      const tableName = value.metadata?.tableName
      if (!tableName) return false // Case: tableName doesn't exist
      const parts = tableName.split(":")
      return parts.length === 2 && parts[0] === namespace // Ensures format is "namespace:something"
    })
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value as T }), {})
}

export function isNumeric(str: any) {
  if (typeof str != "string") return false // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ) // ...and ensure strings of whitespace fail
}

/**
 * Deeply clones a given object or array, creating a new instance without shared references.
 *
 * @param {T} obj - The object or array to be cloned.
 * @returns {T} A deeply cloned copy of the input.
 * @template T
 */
export function deepClone<T>(obj: T): T {
  // Handle primitives and null values directly.
  if (obj === null) return obj as any
  if (typeof obj !== "object") return obj

  // If the object is an array, create a new array and recursively clone each element.
  if (Array.isArray(obj)) {
    const copy: any[] = []
    for (let i = 0; i < (obj as any[]).length; i++) {
      copy[i] = deepClone((obj as any[])[i])
    }
    return copy as any
  }

  // If the object is a plain object, create a new object and recursively clone each property.
  const copy: { [key: string]: any } = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone((obj as { [key: string]: any })[key])
    }
  }
  return copy as T
}

/**
 * Ensure that a number is not negative.
 * If the input number is negative, the function returns 0; otherwise, it returns the input number.
 *
 * @param num - The number to cap at 0. If it is negative, the function returns 0.
 *
 * @returns A number which is either the input number (if it is non-negative) or 0 (if the input number is negative).
 */
export function capAtZero(num: number): number {
  // Ensure that the input is not negative
  return Math.max(0, num)
}
