#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* platform_name = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"PlatformName"];
  return @{ @"PlatformName": platform_name };
}

@end
